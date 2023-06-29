import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppContext } from '../../../contexts';
import { AppContextData } from '../../../types';
import { BrowserRouter } from 'react-router-dom';
import Page from './Page';

describe('Page', () => {
  let appContextData: AppContextData;

  function renderPage(backRoute?: string){
    const page = (
      <Page title="Title" backRoute={backRoute}>
        <div>Content</div>
      </Page>
    );

    render(
      <AppContext.Provider value={appContextData}>
        {backRoute ? (
          <BrowserRouter>
            {page}
          </BrowserRouter>
        ) : page}
      </AppContext.Provider>
    );
  }

  beforeEach(() => {
    appContextData = {
      isError: false,
      setIsError: vi.fn(),
      isLoading: false,
      setIsLoading: vi.fn(),
    };
  });

  describe('when there is an error', () => {
    beforeEach(() => {
      appContextData.isError = true;
    });

    it('renders error message', () => {
      renderPage();
      expect(screen.getByText('Oops! Something went wrong. Please refresh the page to try again.')).toBeInTheDocument();
    });
  });

  describe('when in a loading state', () => {
    beforeEach(() => {
      appContextData.isLoading = true;
    });

    it('renders loading message', () => {
      renderPage();
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  describe('when there is no error or loading state', () => {
    describe('with no back route', () => {
      it('renders only title and content', () => {
        renderPage();
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
        expect(screen.queryByText('Back')).not.toBeInTheDocument();
      });
    });

    describe('with back route', () => {
      it('renders title, content, and back route', () => {
        renderPage('/some-page');
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
        expect(screen.getByText('Back')).toHaveAttribute('href', '/some-page')
      });
    });
  });
});

