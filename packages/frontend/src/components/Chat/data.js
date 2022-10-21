const users = [
	{
		id: 1,
		name: 'Martin Facciuto',
		avatar: 'https://loremflickr.com/50/50/animals?1',
		me: true,
	},
	{
		id: 2,
		name: 'Brian Cox',
		avatar: 'https://loremflickr.com/50/50/animals?2',
	},
]

const messages = [
	{
		userId: 2,
		ago: '10 mins',
		text: 'How likely are you to recommend our company to your friends and family ?',
	},
	{
		userId: 1,
		ago: '5 mins',
		text: 'Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.',
	},
	{
		userId: 2,
		ago: '4 mins',
		text: 'Ok, Understood!',
	},
	{
		userId: 1,
		ago: '3 mins',
		text: 'You’ll receive notifications for all issues, pull requests!',
	},
	{
		userId: 2,
		ago: '3 mins',
		text: 'You can unwatch this repository immediately by clicking here: Keenthemes.com',
	},
	{
		userId: 1,
		ago: '2 mins',
		text: 'Most purchased Business courses during this sale!',
	},
	{
		userId: 2,
		ago: '1 mins',
		text: 'Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided',
	},
]

const messagesWithUsers = messages.map((message) => {
	const user = users.find(({ id }) => id === message.userId)
	return { ...message, user }
})

export default messagesWithUsers
