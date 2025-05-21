const cmd = new Deno.Command("deno", {
    args: [
      "run",
      "--watch",
      "--allow-net",
      "--allow-env",
      "--allow-read",
      "main.ts",
    ],
  });
  
  await cmd.output();