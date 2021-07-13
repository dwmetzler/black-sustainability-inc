import {Button} from "@chakra-ui/react";
import React from "react";

export enum CallsToAction {
    JOIN,
    DONATE
};

type OwnProps = {
    type: CallsToAction;
    label: string;
}

type CallToActionButtonProps = OwnProps;

const onCallToActionClicked = (type: CallsToAction) => {
    switch(type) {
        case CallsToAction.JOIN:
            window.open("https://form.jotform.com/203615928402049", "_blank");
            return true;
        case CallsToAction.DONATE:
            window.open("https://www.blacksustainabilitysummit.com/join-our-network");
            return true;
    }
}

const CallToActionButton = (props: CallToActionButtonProps) => {
    const { type, label } = props;

    return (
        <Button _hover={{opacity: 0.5}} onClick={() => onCallToActionClicked(type)}>
            {label}
        </Button>
    )
}

export default CallToActionButton;