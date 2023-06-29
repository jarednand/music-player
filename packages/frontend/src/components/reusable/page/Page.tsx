import { useContext } from 'react';
import { AppContext } from '../../../contexts';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';

export type Props = {
  title: string;
  children: React.ReactElement | React.ReactNode;
  backRoute?: string;
}

const Page = ({ title, children, backRoute }: Props) => {
  const { isError, isLoading } = useContext(AppContext);

  if (isError){
    return <>Oops! Something went wrong. Please refresh the page to try again.</>
  }

  if (isLoading){
    return <>Loading...</>;
  }

  return (
    <section>
      <Stack gap={3}>
        {backRoute && <Link to={backRoute}>Back</Link>}
        <div>
          <h2>{title}</h2>
          <div>{children}</div>
        </div>
      </Stack>
    </section>
  );
};

export default Page;