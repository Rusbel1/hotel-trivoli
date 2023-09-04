import { Button } from "antd";

type SharedButtonProps = {
  buttonText: string;
  isPrimary: boolean;
  onClick: () => void;
};

export function SharedButton(props: SharedButtonProps) {
  return (
    <>
      <Button
        type={props.isPrimary ? "primary" : "default"}
        onClick={props.onClick}
      >
        {props.buttonText}
      </Button>
    </>
  );
}
