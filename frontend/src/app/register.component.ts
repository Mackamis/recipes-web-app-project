import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
    selector: 'app-register',
    imports: [ReactiveFormsModule],
    template: `
        <div class="container">
            <div class="card register">
                <h2>Register</h2>
                <form class="stack" [formGroup]="form" (ngSubmit)="onSubmit()">
                    <div class="field">
                        <label for="username">Username *</label>
                        <input id="username" formControlName="username" />
                    </div>
                    <div class="field">
                        <label for="email">Email *</label>
                        <input id="email" formControlName="email" />
                    </div>
                    <div class="field">
                        <label for="phone">Phone number *</label>
                        <input id="phone" formControlName="phone" placeholder="06..." />
                    </div>
                    <div class="field">
                        <label for="region">Region *</label>
                        <input id="region" formControlName="region" />
                    </div>
                    <div class="field">
                        <label for="bio">Bio</label>
                        <textarea id="bio" formControlName="bio" rows="3"></textarea>
                    </div>
                    <div class="field">
                        <label for="password">Password *</label>
                        <input id="password" type="password" formControlName="password" />
                    </div>
                    <div class="field">
                        <label for="confirmPassword">Repeat password *</label>
                        <input id="confirmPassword" type="password" formControlName="confirmPassword" />
                    </div>

                    <button class="button button--primary" type="submit">Register</button>

                    @if (message) {
                        <p [class]="success ? 'meta' : 'error'">{{ message }}</p>
                    }
                </form>
            </div>
        </div>
    `,
        styles: `
        .register {
            max-width: 28rem;
            margin: var(--space-5) auto;
            background: var(--color-amber-sky);
            border-color: var(--color-golden-grass);
        }

        .register h2 {
            color: var(--color-text-muted);
        }

        .register .field input,
        .register .field textarea {
            background: var(--color-card-cream);
            border-color: var(--color-golden-grass);
        }

        .register .button--primary {
            background: var(--color-brand);
            border-color: var(--color-ochre);
            color: var(--color-text);
            font-weight: 600;
        }

        .register .button--primary:hover {
            background: var(--color-burnt-sienna);
        }
    `,
})
export class RegisterComponent {
    private fb = inject(FormBuilder);
    private userService = inject(UserService);
    message = '';
    success = false;

    form = this.fb.nonNullable.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern(/^06\d{7,8}$/)]],
        region: ['', Validators.required],
        bio: [''],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
    });

    onSubmit() {
        this.success = false;
        if (this.form.invalid) {
            this.message = 'Fill in required fields. Email and phone have to be valid, and password must contain at least 8 letters';
            return;
        }
        const { confirmPassword, ...user } = this.form.getRawValue();
        if (user.password !== confirmPassword) {
            this.message = 'Passwords do not match.';
            return;
        }
        const error = this.userService.register(user);
        this.success = !error;
        this.message = error ?? 'Registered sucessfully!';
        if (!error) this.form.reset();
    }
}