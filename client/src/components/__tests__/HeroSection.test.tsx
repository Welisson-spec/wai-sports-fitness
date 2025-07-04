import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { HeroSection } from '../HeroSection';

describe('HeroSection', () => {
  it('renders heading and button', () => {
    render(<HeroSection />);
    expect(
      screen.getByRole('heading', { name: /assessoria esportiva/i })
    ).toBeInTheDocument();
    const button = screen.getByRole('button', { name: /começar agora/i });
    expect(button).toBeInTheDocument();
  });

  it('scrolls to section when button clicked', () => {
    const target = document.createElement('div');
    target.id = 'planos';
    const scrollIntoView = vi.fn();
    target.scrollIntoView = scrollIntoView;
    document.body.appendChild(target);

    render(<HeroSection />);
    const button = screen.getByRole('button', { name: /começar agora/i });
    fireEvent.click(button);
    expect(scrollIntoView).toHaveBeenCalled();
  });
});
