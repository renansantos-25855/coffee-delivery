import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react'
import {
  CartContainer,
  Address,
  AddressHeader,
  Container,
  Payment,
  AddressBody,
  PaymentHeader,
  PaymentBody,
  PaymentErrorMessage,
  CartTotal,
  Coffee,
  CoffeeInfo,
  CartTotalInfo,
  CheckoutButton,
} from './styles'
import { TextInput } from '../../components/Forms/TextInput'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCart } from '../../hooks/useCart'
import { Radio } from '../../components/Forms/Radio'
import { Fragment } from 'react/jsx-runtime'
import { QuantityInput } from '../../components/Forms/QuantityInput'
import { coffees } from '../../../data.json'

interface FormInputs {
  zipcode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrderSchema = z.object({
  zipcode: z.string({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  complement: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrderSchema>

const shippingPrice = 3.5

export function Cart() {
  const {
    cart,
    incrementItemAmount,
    decrementItemAmount,
    removeItem,
    checkoutNewOrder,
  } = useCart()

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      amount: item.amount,
    }
  })

  const totalItemsPrice = coffeesInCart.reduce((accumulator, value) => {
    accumulator += value.price * value.amount

    return accumulator
  }, 0)

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrderSchema),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  function handleItemIncrement(itemId: number) {
    incrementItemAmount(itemId)
  }

  function handleItemDecrement(itemId: number) {
    decrementItemAmount(itemId)
  }

  function handleItemRemove(itemId: number) {
    removeItem(itemId)
  }

  function handleOrderCheckout(data: FormInputs) {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    checkoutNewOrder(data)
  }

  return (
    <CartContainer>
      <Container>
        <h2>Complete seu pedido</h2>
        <form id="order_form" onSubmit={handleSubmit(handleOrderCheckout)}>
          <Address>
            <AddressHeader>
              <MapPin size={22} />
              <div>
                <span>Endereço de entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeader>
            <AddressBody>
              <TextInput
                type="text"
                placeholder="CEP"
                containerProps={{ style: { gridArea: 'zipcode' } }}
                {...register('zipcode')}
                error={errors.zipcode}
              />
              <TextInput
                type="text"
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                {...register('street')}
                error={errors.street}
              />
              <TextInput
                type="text"
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                {...register('number')}
                error={errors.number}
              />
              <TextInput
                type="text"
                placeholder="Complemento"
                containerProps={{ style: { gridArea: 'complement' } }}
                optional
                {...register('complement')}
                error={errors.complement}
              />
              <TextInput
                type="text"
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                {...register('neighborhood')}
                error={errors.neighborhood}
              />
              <TextInput
                type="text"
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                {...register('city')}
                error={errors.city}
              />
              <TextInput
                type="text"
                placeholder="UF"
                containerProps={{ style: { gridArea: 'state' } }}
                {...register('state')}
                error={errors.state}
              />
            </AddressBody>
          </Address>
          <Payment>
            <PaymentHeader>
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeader>
            <PaymentBody>
              <Radio
                isSelected={selectedPaymentMethod === 'credit'}
                {...register('paymentMethod')}
                value={'credit'}
              >
                <CreditCard />
                <span>Cartão de crédito</span>
              </Radio>
              <Radio
                isSelected={selectedPaymentMethod === 'debit'}
                {...register('paymentMethod')}
                value={'debit'}
              >
                <Bank />
                <span>Cartão de débito</span>
              </Radio>
              <Radio
                isSelected={selectedPaymentMethod === 'cash'}
                {...register('paymentMethod')}
                value={'cash'}
              >
                <Money />
                <span>Dinheiro</span>
              </Radio>
            </PaymentBody>

            {errors.paymentMethod ? (
              <PaymentErrorMessage role="alert">
                {errors.paymentMethod.message}
              </PaymentErrorMessage>
            ) : null}
          </Payment>
        </form>
      </Container>
      <Container>
        <h2>Cafés selecionados</h2>
        <CartTotal>
          {coffeesInCart.map((item) => (
            <Fragment key={item.id}>
              <Coffee>
                <div>
                  <img src={item.image} alt="" />
                  <div>
                    <span>{item.name}</span>
                    <CoffeeInfo>
                      <QuantityInput
                        amount={item.amount}
                        increaseAmount={() => handleItemIncrement(item.id)}
                        decreaseAmount={() => handleItemDecrement(item.id)}
                      />
                      <button onClick={() => handleItemRemove(item.id)}>
                        <Trash /> <span>Remover</span>
                      </button>
                    </CoffeeInfo>
                  </div>
                </div>
                <aside>
                  <span>R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                </aside>
              </Coffee>
              <span />
            </Fragment>
          ))}

          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>R$ {totalItemsPrice.toFixed(2).replace('.', ',')}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ {shippingPrice.toFixed(2).replace('.', ',')}</span>
            </div>
            <div>
              <span>Total</span>
              <span>
                R${' '}
                {(totalItemsPrice + shippingPrice).toFixed(2).replace('.', ',')}
              </span>
            </div>
          </CartTotalInfo>

          <CheckoutButton type="submit" form="order_form">
            Confirmar pedido
          </CheckoutButton>
        </CartTotal>
      </Container>
    </CartContainer>
  )
}
