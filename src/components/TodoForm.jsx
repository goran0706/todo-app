import { Box, Button, createStyles, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

const useStyles = createStyles(theme => ({
	form: {
		marginBottom: '4rem',
	},
	inputWrapper: {
		width: '100%',

		'& input': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
		},
	},
}))

export default function TodoForm({ handleSubmission }) {
	const { classes } = useStyles()
	const form = useForm({ initialValues: { todo: '' } })

	return (
		<Box>
			<form onSubmit={form.onSubmit(input => handleSubmission(input.todo))} className={classes.form}>
				<Group noWrap position='apart' spacing={2}>
					<TextInput placeholder='Create a new todo' {...form.getInputProps('todo')} className={classes.inputWrapper} />
					<Button type='submit' color='violet' uppercase>
						Create
					</Button>
				</Group>
			</form>
		</Box>
	)
}
