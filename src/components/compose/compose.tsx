interface ComposeProps {
  components: Array<any>;
  children: React.ReactNode;
}

const Compose = ({ components, children }: ComposeProps) => {
  return (
    <>
      {components.reverse().reduce((acc: any, curr: any[]) => {
        const [Provider, props] = Array.isArray(curr)
          ? [curr[0], curr[1]]
          : [curr, {}];
        return <Provider {...props}>{acc}</Provider>;
      }, children)}
    </>
  );
};

export default Compose;
