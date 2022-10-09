import { Chip, createStyles, Group, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    chip: {
        '& .mantine-Chip-label': {
            background:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[5]
                    : theme.colors.gray[2],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
    },
}));

export default function Counter({
    label,
    count,
    completedCount,
    showProgress,
}) {
    const { classes } = useStyles();

    return (
        <Group noWrap position='apart'>
            <Text weight='bold' color='violet'>
                {label}
            </Text>
            <Chip
                color='violet'
                variant='filled'
                checked={false}
                className={classes.chip}
            >
                {showProgress ? `${completedCount} of ${count}` : count}
            </Chip>
        </Group>
    );
}
