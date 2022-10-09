import './App.css';
import {
    ColorSchemeProvider,
    Container,
    MantineProvider,
    Stack,
} from '@mantine/core';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm';
import TodoHeader from './components/Header';
import TodoList from './components/TodoList';
import TodoListEmpty from './components/NoticeListEmpty';
import TodoStats from './components/TodoStats';
import useLocalStorageState from './hooks/useLocalStorageState';

function App() {
    const [todoList, setTodoList] = useLocalStorageState('todoList', []);
    const [count, setCount] = useLocalStorageState('count', 0);
    const [completedCount, setCompletedCount] = useLocalStorageState(
        'completedCount',
        0
    );
    const [colorScheme, setColorScheme] = useLocalStorageState(
        'theme',
        'light'
    );
    const toggleColorScheme = (value) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useEffect(() => {
        const records = todoList.filter((t) => t.isCompleted);
        setCompletedCount(records.length);
    }, [setCompletedCount, todoList]);

    const createTask = (desc) => {
        if (!desc) return;
        const todoListCopy = [...todoList];
        const task = {
            id: uuidv4(),
            description: desc,
            isCompleted: false,
        };
        todoListCopy.push(task);
        setTodoList(todoListCopy);
        setCount(todoListCopy.length);
    };

    const updateTask = (id) => {
        const todoListCopy = [...todoList];
        const todo = todoListCopy.find((t) => t.id === id);
        todo.isCompleted = !todo.isCompleted;
        setTodoList(todoListCopy);
    };

    const deleteTask = (id) => {
        const todoListCopy = [...todoList];
        const updatedTodoList = todoListCopy.filter((todo) => todo.id !== id);
        setTodoList(updatedTodoList);
        setCount(updatedTodoList.length);
    };

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{ colorScheme }}
                withGlobalStyles
                withNormalizeCSS
            >
                <Container>
                    <Stack
                        justify='center'
                        spacing='xs'
                        style={{ marginTop: '4rem' }}
                    >
                        <TodoHeader />
                        <TodoForm handleSubmission={createTask} />
                        <TodoStats
                            count={count}
                            completedCount={completedCount}
                        />
                        {count ? (
                            <TodoList
                                data={todoList}
                                updateTask={updateTask}
                                deleteTask={deleteTask}
                            />
                        ) : (
                            <TodoListEmpty />
                        )}
                    </Stack>
                </Container>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
