import { Text } from "@fluentui/react";
import { Delete24Regular } from "@fluentui/react-icons";

import styles from "./ClearChatButton.module.css";

interface Props {
    onClick: () => void;
    disabled?: boolean;
}

export const ClearChatButton = ({ disabled, onClick }: Props) => {
    return (
        <div className={`${styles.container} ${disabled && styles.disabled}`} onClick={onClick}>
            <Delete24Regular />
            <Text>{"Clear chat"}</Text>
        </div>
    );
};
