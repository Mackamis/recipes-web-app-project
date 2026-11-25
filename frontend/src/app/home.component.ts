import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [RouterLink],
    template: `
        <div class="container">
            <div class="card stack home">
                <h1>Recepti</h1>
                <p class="meta">Pronađi recept, sačuvaj svoje i podeli ih sa drugima.</p>
                <a class="button button--primary" routerLink="/register">Register</a>
            </div>
        </div>
    `,
    styles: `
        .home {
            max-width: 28rem;
            margin: var(--space-5) auto;
            text-align: center;
            background: var(--color-amber-sky);
            border-color: var(--color-golden-grass);
        }

        .home h1 {
            color: var(--color-text-muted);
        }

        .home .button--primary {
            background: var(--color-brand);
            border-color: var(--color-ochre);
            color: var(--color-text);
            font-weight: 600;
        }

        .home .button--primary:hover {
            background: var(--color-burnt-sienna);
        }
    `,
})
export class HomeComponent {}