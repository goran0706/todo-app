import { createStyles, List } from '@mantine/core';
import TodoItem from './TodoItem';

const useStyles = createStyles((theme) => ({
    list: {
        listStyleType: 'none',
        // height: '600px',
        // overflow: 'auto',
    },
}));

export default function TodoList({ data, updateTask, deleteTask }) {
    const { classes } = useStyles();

    return (
        <List className={classes.list}>
            {data.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            ))}
        </List>
    );
}
