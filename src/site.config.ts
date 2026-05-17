/**
 * Site options — images live under `public/media/`.
 *
 * Bundled stock images (Unsplash License — https://unsplash.com/license):
 * - `public/media/jobsahead.jpg` — Brooke Balentine, “Vintage computer monitor and
 *   keyboard on a desk”, https://unsplash.com/photos/rZzpoVJzT-I
 * - `public/media/alok.jpg` — Олег Мороз, “yellow and white bokeh lights”,
 *   https://unsplash.com/photos/O4fiPv6vtRA (decorative mood only; not a portrait of Alok)
 *
 * Replace `alok.jpg` with a portrait you own or have permission to use when you can.
 */
export const siteConfig = {
  images: {
    /** Hero circle — default is decorative bokeh; swap for a portrait you may publish. */
    alokPortrait: '/media/alok.jpg',
    /** JobsAhead card — default is era mood stock; swap for a real team/UI photo if you have rights. */
    jobsAhead: '/media/jobsahead.jpg',
  },
  /**
   * Optional mailto for a single quiet CTA (e.g. your inbox).
   * Example: 'mailto:you@example.com?subject=Birthday%20note%20for%20Alok'
   */
  sendNoteMailto: '' as string,
} as const
