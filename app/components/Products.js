'use client'

import { useState } from 'react'
import Image from 'next/image'
import { shared } from '../data/content'
import Reveal from './Reveal'

export default function Products({ t }) {
  // "all" shows everything; otherwise filter by brand id.
  const [filter, setFilter] = useState('all')

  const visible =
    filter === 'all'
      ? shared.products
      : shared.products.filter((p) => p.brand === filter)

  return (
    <section id="products" className="section section--tint">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Our Products</span>
          <h2 className="section__title">{t.products.title}</h2>
          <p className="section__subtitle">{t.products.subtitle}</p>
        </Reveal>

        {/* Brand filter chips */}
        <Reveal className="filter">
          <button
            type="button"
            className={`filter__chip ${filter === 'all' ? 'filter__chip--active' : ''}`}
            onClick={() => setFilter('all')}
          >
            {t.products.all}
          </button>
          {shared.brands.map((brand) => (
            <button
              key={brand.id}
              type="button"
              className={`filter__chip ${filter === brand.id ? 'filter__chip--active' : ''}`}
              onClick={() => setFilter(brand.id)}
            >
              {t.brands.items[brand.id].name}
            </button>
          ))}
        </Reveal>

        <div className="products__grid">
          {visible.map((product, i) => {
            const name = t.products.items[product.id]
            const brandName = t.brands.items[product.brand].name
            return (
              <Reveal as="article" key={product.id} className="product-card" delay={(i % 4) * 90}>
                <div className="product-card__img">
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    sizes="(max-width: 600px) 45vw, 220px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <span className="product-card__brand">{brandName}</span>
                <h3 className="product-card__name">{name}</h3>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
