import React from 'react';
import { render } from '@testing-library/react';
import WeatherCard from 'WeatherCard';

test('renders the WeatherCard component', () => {
  const { getByText } = render(<WeatherCard />);

  // Assert that the text "WeatherCard" is present in the rendered component.
  const weatherCardElement = getByText('WeatherCard');
  expect(weatherCardElement).toBeInTheDocument();
    <div>WeatherCard</div>;
});

export default WeatherCard;
