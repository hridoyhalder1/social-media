import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../PostSide/PostShare/PostShare';

function SharedModal({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
            size="55%"
        >
            <PostShare></PostShare>
        </Modal>
    );
}
export default SharedModal;