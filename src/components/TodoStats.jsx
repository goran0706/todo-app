import { Group } from '@mantine/core'
import Counter from './Counter'

export default function TodoStats({ count, completedCount }) {
	return (
		<Group noWrap position='apart'>
			<Counter label='Created Tasks' count={count} />
			<Counter label='Completed Tasks' count={count} completedCount={completedCount} showProgress={true} />
		</Group>
	)
}
 