import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import DetailContainer from './DetailContainer';

const server = setupServer(
    rest.get(
        'https://thronesapi.com/api/v2/Characters/3',
        (req, res, ctx) => {
            return res(
                ctx.json({
                    id: 3,
                    firstName: "Arya",
                    lastName: "Stark",
                    fullName: "Arya Stark",
                    title: "No One",
                    family: "House Stark",
                    image: "arya-stark.jpg",
                    imageUrl: "https://thronesapi.com/assets/images/arya-stark.jpg"
                }));
        })
);

describe('Game of Thrones character detail page', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('renders details info about a specific character', async () => {
        render(
            <MemoryRouter initialEntries={['/3']}>
                <Route path='/:id'>
                    <DetailContainer />
                </ Route>
            </MemoryRouter>
        );

        screen.getByText('Loading...');

        return waitFor(() => {
            screen.getByAltText('character image');
            screen.getByText('Arya Stark', { exact: false });
        });

    });
})