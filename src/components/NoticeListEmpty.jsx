import { Center, createStyles, Text } from '@mantine/core';

const useStyles = createStyles(() => ({
    wrapper: {
        marginTop: '4rem',
    },
}));

export default function TodoListEmpty() {
    const { classes } = useStyles();

    return (
        <Center className={classes.wrapper}>
            <Text color='gray' weight='bold'>
                Empty List
            </Text>
        </Center>
    );
}
