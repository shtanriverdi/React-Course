import TodoList from "./TodoList";

import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Cascadia Code',
      'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif',
    ].join(','),
  },
});

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1 className="text-3xl font-bold">
          Todo List!
        </h1>
        <div className="p-6 max-w-sm mx-auto rounded-xl shadow-xl flex items-center space-x-4">
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-slate-500">You have a new message!</p>
          </div>
        </div>
        <button className="h-12 px-6 rounded-md bg-[#65a30d] text-white" type="submit">
          Buy now
        </button>
        <TodoList />
      </div>
    </ThemeProvider>
  )
}