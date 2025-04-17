import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function App() {
  const mutation = useMutation({
    mutationFn: (newTodo: any) => {
      return axios.post('/todos', newTodo);
    },
  });

  return (
    <div>
      {mutation.isPending ? (
        'Adding todo...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({ id: new Date() });
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  );
}
