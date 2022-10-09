import { ActionIcon, createStyles, Group, List, Text } from '@mantine/core';
import { CheckCircle, Circle, XCircle } from 'react-feather';

const useStyles = createStyles((theme) => ({
    list: {
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[2],
        padding: '1rem',
        border: 'none',
        borderRadius: '4px',
        marginBottom: '0.5rem',
    },
}));

export default function TodoItem({ todo, updateTask, deleteTask }) {
    const { classes } = useStyles();
    const { id, description, isCompleted } = todo;

    return (
        <List.Item key={todo.id} className={classes.list}>
            <Group noWrap position='apart'>
                <Group>
                    <ActionIcon
                        variant='light'
                        color='violet'
                        size={24}
                        radius='xl'
                        onClick={() => updateTask(id)}
                    >
                        {isCompleted ? (
                            <CheckCircle size={18} />
                        ) : (
                            <Circle size={18} />
                        )}
                    </ActionIcon>
                    <Text
                        strikethrough={isCompleted}
                        color={isCompleted && 'dimmed'}
                    >
                        {description}
                    </Text>
                </Group>
                <ActionIcon
                    variant='light'
                    color='violet'
                    onClick={() => deleteTask(id)}
                >
                    <XCircle size={18} />
                </ActionIcon>
            </Group>
        </List.Item>
    );
}
