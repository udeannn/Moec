export const setup = {
  permission: 0, // All permission: 0 = all, 1 = owner, 2 = onwer, admin group
  group_required: false, // if true command only work on group
};

export async function run(ctx, obj) {
  await ctx.sendMessage(
    obj.room.id,
    { text: 'Hello from long' },
    { quoted: obj.message.rawkey },
  ); // Reply message
  await obj.reply('Hello from short'); // Shortcut
}
