import { render, screen, fireEvent } from '@testing-library/react';
import Admin from '../Admin';
import { MemoryRouter } from "react-router-dom";

test('tests admin page', () => {
  const page = render(<Admin />, {wrapper: MemoryRouter});

  const inputName = page.getByPlaceholderText(/name/i);
  fireEvent.change(inputName, {target: {value: 'query'}});
  expect(inputName.value).toBe('query');

  const inputSinger = page.getByPlaceholderText(/singer/i);
  fireEvent.change(inputSinger, {target: {value: 'query'}});
  expect(inputSinger.value).toBe('query');

  const inputAlbum = page.getByPlaceholderText(/album/i);
  fireEvent.change(inputAlbum, {target: {value: 'query'}});
  expect(inputAlbum.value).toBe('query');

  const inputDuration = page.getByPlaceholderText(/duration/i);
  fireEvent.change(inputDuration, {target: {value: 'query'}});
  expect(inputDuration.value).toBe('query');

  const inputPhoto = page.getByPlaceholderText(/photo/i);
  fireEvent.change(inputPhoto, {target: {value: 'query'}});
  expect(inputPhoto.value).toBe('query');

  const inputId = page.getByPlaceholderText(/id/i);
  fireEvent.change(inputId, {target: {value: 'query'}});
  expect(inputId.value).toBe('query');

});
