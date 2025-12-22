import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { educationData as mockEducationData } from '../test-utils/mock-metadata';
import Education from './education';

describe('Education section render', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Education />);
    expect(container).toMatchSnapshot();
  });

  it('displays the section heading', () => {
    render(<Education />);
    const heading = screen.getByRole('heading', { name: 'Education', level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('displays education information', () => {
    render(<Education />);

    const educationInfo = mockEducationData[0];

    // Test institute name
    const institute = screen.getByRole('heading', { name: educationInfo.institute, level: 3 });
    expect(institute).toBeInTheDocument();

    // Test degree
    const degree = screen.getByText(educationInfo.degree);
    expect(degree).toBeInTheDocument();

    // Test major
    const major = screen.getByText(educationInfo.major);
    expect(major).toBeInTheDocument();

    // Test duration
    const duration = screen.getByText(educationInfo.duration);
    expect(duration).toBeInTheDocument();
  });
});
