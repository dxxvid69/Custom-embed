import discord

client = discord.Client()

@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')

@client.event
async def on_message(message):
    if message.content == '!embed':
        embed = discord.Embed(
            title='Embed Title',
            description='This is a sample embed in discord.py',
            color=discord.Color.blue()
        )
        embed.set_author(name=message.author.name, icon_url=message.author.avatar_url)
        embed.add_field(name='Field 1', value='Value 1', inline=False)
        embed.add_field(name='Field 2', value='Value 2', inline=False)
        embed.set_footer(text='Footer Text')
        await message.channel.send(embed=embed)

# Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.run('YOUR_BOT_TOKEN')
