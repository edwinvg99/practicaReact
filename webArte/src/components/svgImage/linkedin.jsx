import React from 'react'

export default function LinkedinImageSvg () {
  return (
    <a className="ml-3 text-gray-400 hover:text-blue-400">
    <svg
      fill="currentColor"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="0"
      className="w-5 h-5"
      viewBox="0 0 24 24"
    >
      <path
        stroke="none"
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
      ></path>
      <circle cx="4" cy="4" r="2" stroke="none"></circle>
    </svg>
  </a>
)
}
