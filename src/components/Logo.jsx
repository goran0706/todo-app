import { Title, useMantineColorScheme } from '@mantine/core'

export default function Logo({ label }) {
	const { colorScheme } = useMantineColorScheme()
	return (
		<Title weight='bolder' color={colorScheme === 'dark' ? 'gray' : 'violet'} size='h1' transform='uppercase'>
			{label}
		</Title>
	)
}
 