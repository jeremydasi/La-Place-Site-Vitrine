import React from 'react';
import { Modal } from 'antd';

interface ModalProps {
    isVisible: boolean;
    children: any;
    onClose: () => void;
}

const CustomModal: React.FunctionComponent<ModalProps> = ({ isVisible, children, onClose }) => {
    const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);

    React.useEffect(() => {
        setInitialRenderComplete(true);
    }, []);

    if (!initialRenderComplete) {
        return null;
    }

    return (
        <Modal open={isVisible} footer={null} onCancel={onClose}>
            {children}
        </Modal>
    );
};

export default CustomModal;
