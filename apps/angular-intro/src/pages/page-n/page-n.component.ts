import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-page-n',
  template: `<h1>Page: {{ pageNumber }}</h1>`,
})
export class PageNComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  pageNumber?: number;

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        this.pageNumber = +params['pageNumber'];
      });
  }
}
