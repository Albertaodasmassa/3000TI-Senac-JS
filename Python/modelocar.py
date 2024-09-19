Nome = input('Por Favor Insira seu nome:')
Idade = float((input)('Por favor insira sua idade:'))
Modelocarro = input('Por favor insira o modelo do carro:')

print('Bem vindo ao sistema: ', Nome)
print("Sua Idade é", Idade)
print('Maior De Idade' if Idade>=21 else 'Menor de Idade')
print('Pode Ter CNH' if Idade>=21 else 'Não Pode ter CNH')
