import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UsersList from '../../components/Navbar/UsersList';

jest.mock('../../components/Chat/Conversation', () => () => (
  <div data-testid="conversation">Mock Conversation</div>
));

describe('UsersList Component', () => {
  test('renders the component correctly', () => {
    render(<UsersList />);

    const titleElement = screen.getByText(/Tharlizwa/i);
    expect(titleElement).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText(/Search Messages/i);
    expect(searchInput).toBeInTheDocument();

    const recentText = screen.getByText(/Recent/i);
    expect(recentText).toBeInTheDocument();

    const conversationElement = screen.getByTestId('conversation');
    expect(conversationElement).toBeInTheDocument();
  });

  test('handles user typing in the search input', () => {
    render(<UsersList />);

    const searchInput = screen.getByPlaceholderText(
      /Search Messages/i
    ) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'Hello' } });

    expect(searchInput.value).toBe('Hello');
  });

  test('renders in dark mode with appropriate classes', () => {
    render(<UsersList />);
    const container = screen.getByText(/Tharlizwa/i).closest('div');
    expect(container).toHaveClass('dark:text-gray-200');
  });
});
