import {Button} from "@chakra-ui/react";
import React from "react";

export enum CallsToAction {
    JOIN,
    DONATE,
    SPONSOR
};

type OwnProps = {
    type: CallsToAction;
    label: string;
}

type CallToActionButtonProps = OwnProps;

const onCallToActionClicked = (type: CallsToAction) => {
    switch(type) {
        case CallsToAction.DONATE:
            window.open("https://donorbox.org/support-black-sustainability-inc");
            return true;
        case CallsToAction.JOIN:
            window.open("https://form.jotform.com/203615928402049");
            return true;
        case CallsToAction.SPONSOR:
            window.open("https://forms.gle/u2haAbnCCkvCHgPD6");
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