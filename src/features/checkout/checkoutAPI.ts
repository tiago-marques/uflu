// A mock function to mimic making an async request for data
export function fetchFilter (filter = '') {
    return new Promise<{ data: string }>(resolve =>
        setTimeout(() => resolve({ data: filter }), 500)
    )
}
