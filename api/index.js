export default function handler(req, res) {
  try {
    const ua = req.headers['user-agent'] || "";

    // ✅ อนุญาต Roblox / executor
    if (ua === "" || ua.toLowerCase().includes("roblox")) {
      res.setHeader('Content-Type', 'text/plain');
      res.status(200).send(`
print("ZeIoNhUb: โหลดสำเร็จ!")

-- โหลดสคริปใหม่
loadstring(game:HttpGet("https://raw.githubusercontent.com/Teufkijdjd/Dextzr-build-a-boat-config/refs/heads/main/d8ad56c60f34318c.lua.txt"))()
      `);
    } else {
      res.status(404).send("404: NOT FOUND");
    }

  } catch (err) {
    res.status(500).send("Error");
  }
}
