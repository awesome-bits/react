type ButtonProps = {
  children: React.ReactNode;
  [x: string]: HTMLButtonElement | React.ReactNode;
};

export default function Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
}
