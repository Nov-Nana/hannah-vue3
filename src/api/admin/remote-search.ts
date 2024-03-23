import { get } from '../http'

export function transactionList() {
    return get(
        '/admin-/transaction/list'
    )
}