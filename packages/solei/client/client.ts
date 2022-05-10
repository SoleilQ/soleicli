function getSocketHost() {
  const url: any = location;
  const host = url.host;
  const isHttps = url.protocol === "https:";
  return `${isHttps ? "wss" : "ws"}://${host}`;
}

if ("WebSocket" in window) {
  const socket = new WebSocket(getSocketHost(), "solei-hmr");
  let pingTimer: NodeJS.Timer | null = null;
  socket.addEventListener("message", async ({ data }) => {
    data = JSON.parse(data);
    if (data.type == "connected") {
      console.log(`[solei] connected.`);
      // 心跳包
      pingTimer = setInterval(() => socket.send("ping"), 30000);
    }
    if (data.type == "reload") {
      window.location.reload();
    }
  });

  async function waitForSuccessfulping(ms = 1000) {
    // 死循环 不断向服务端发送服务
    while (true) {
      try {
        await fetch("/_soeli_ping");
        break;
      } catch (e) {
        await new Promise((resolve) => setTimeout(resolve, ms));
      }
    }
  }

  socket.addEventListener("close", async () => {
    if (pingTimer) clearInterval(pingTimer);
    console.info("[solei] Dev server disconnected. Pilling for restart...");
    await waitForSuccessfulping();
    location.reload();
  });
}
