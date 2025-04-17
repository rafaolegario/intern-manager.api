import { AddressDTO } from "src/@types/address";

export interface AddressRepository {
  create(intern: AddressDTO): Promise<void>
}