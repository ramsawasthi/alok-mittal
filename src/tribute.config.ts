/**
 * Tribute site options — edit paths after adding files under `public/tribute/`.
 *
 * Bundled stock images (Unsplash License — https://unsplash.com/license):
 * - `public/tribute/jobsahead.jpg` — Brooke Balentine, “Vintage computer monitor and
 *   keyboard on a desk”, https://unsplash.com/photos/rZzpoVJzT-I
 * - `public/tribute/alok.jpg` — Олег Мороз, “yellow and white bokeh lights”,
 *   https://unsplash.com/photos/O4fiPv6vtRA (decorative mood only; not a portrait of Alok)
 *
 * Replace `alok.jpg` with a portrait you own or have permission to use when you can.
 */
export const tributeConfig = {
  images: {
    /** Hero circle — default is decorative bokeh; swap for a portrait you may publish. */
    alokPortrait: '/tribute/alok.jpg',
    /** JobsAhead card — default is era mood stock; swap for a real team/UI photo if you have rights. */
    jobsAhead: '/tribute/jobsahead.jpg',
  },
  /**
   * Optional mailto for a single quiet CTA (e.g. your inbox).
   * Example: 'mailto:you@example.com?subject=Birthday%20note%20for%20Alok'
   */
  sendNoteMailto: '' as string,
} as const
