import { ButtonToggle } from './ButtonToggle';
import { Group } from '@mantine/core';
import Logo from './Logo';

export default function TodoHeader() {
    return (
        <Group noWrap position='apart'>
            <Logo label='todo' />
            <ButtonToggle />
        </Group>
    );
}
