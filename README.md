# Exercício 1: Soma dos Primeiros N Números

<span style="color: pink;">Observe o trecho de código abaixo:</span>

```java
int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça {
   K = K + 1;
   SOMA = SOMA + K;
}
Imprimir(SOMA);

python:

INDICE = 13
SOMA = 0
K = 0

while K < INDICE:
    K += 1  # Incrementa K em 1
    SOMA += K  # Adiciona K a SOMA

print(SOMA)

```

# README para Exercício 2

```md
# Exercício 2: Sequência de Fibonacci

<span style="color: pink;">Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.</span>

<span style="color: pink;">IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;</span>

### **Resposta**

```python
def pertence_fibonacci(n):
    a, b = 0, 1
    fibonacci_sequence = [a, b]

    while b < n:
        a, b = b, a + b
        fibonacci_sequence.append(b)

    if n in fibonacci_sequence:
        print(f"{n} pertence à sequência de Fibonacci.")
    else:
        print(f"{n} não pertence à sequência de Fibonacci.")

    print("Sequência de Fibonacci gerada:", fibonacci_sequence)

numero = int(input("Informe um número: "))
pertence_fibonacci(numero)


### **README para Exercício 3**
# Exercício 1: Soma dos Primeiros N Números

<span style="color: pink;">Observe o trecho de código abaixo:</span>

```java
int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça {
   K = K + 1;
   SOMA = SOMA + K;
}
Imprimir(SOMA);

python:

INDICE = 13
SOMA = 0
K = 0

while K < INDICE:
    K += 1  # Incrementa K em 1
    SOMA += K  # Adiciona K a SOMA

print(SOMA)

```

# README para Exercício 2

```md
# Exercício 2: Sequência de Fibonacci

<span style="color: pink;">Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.</span>

<span style="color: pink;">IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;</span>

### **Resposta**

```python
def pertence_fibonacci(n):
    a, b = 0, 1
    fibonacci_sequence = [a, b]

    while b < n:
        a, b = b, a + b
        fibonacci_sequence.append(b)

    if n in fibonacci_sequence:
        print(f"{n} pertence à sequência de Fibonacci.")
    else:
        print(f"{n} não pertence à sequência de Fibonacci.")

    print("Sequência de Fibonacci gerada:", fibonacci_sequence)

numero = int(input("Informe um número: "))
pertence_fibonacci(numero)

````
### **README para Exercício 3**

```
# Exercício 3: Faturamento Diário

<span style="color: pink;">Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:</span>
- <span style="color: pink;">O menor valor de faturamento ocorrido em um dia do mês;</span>
- <span style="color: pink;">O maior valor de faturamento ocorrido em um dia do mês;</span>
- <span style="color: pink;">Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.</span>

<span style="color: pink;">IMPORTANTE:</span>
- <span style="color: pink;">Usar o json ou xml disponível como fonte dos dados do faturamento mensal;</span>
- <span style="color: pink;">Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;</span>

### **Resposta**

```python
import json

faturamento_diario_json = '''
{
  "dias": [
    {"dia": 1, "valor": 22174.1664},
    {"dia": 2, "valor": 24537.6698},
    {"dia": 3, "valor": 26139.6134},
    {"dia": 4, "valor": 0.0},
    {"dia": 5, "valor": 0.0},
    {"dia": 6, "valor": 26742.6612},
    {"dia": 7, "valor": 0.0},
    {"dia": 8, "valor": 42889.2258},
    {"dia": 9, "valor": 46251.174},
    {"dia": 10, "valor": 11191.4722},
    {"dia": 11, "valor": 0.0},
    {"dia": 12, "valor": 0.0},
    {"dia": 13, "valor": 3847.4823},
    {"dia": 14, "valor": 373.7838},
    {"dia": 15, "valor": 2659.7563},
    {"dia": 16, "valor": 48924.2448},
    {"dia": 17, "valor": 18419.2614},
    {"dia": 18, "valor": 0.0},
    {"dia": 19, "valor": 0.0},
    {"dia": 20, "valor": 35240.1826},
    {"dia": 21, "valor": 43829.1667},
    {"dia": 22, "valor": 18235.6852},
    {"dia": 23, "valor": 4355.0662},
    {"dia": 24, "valor": 13327.1025},
    {"dia": 25, "valor": 0.0},
    {"dia": 26, "valor": 0.0},
    {"dia": 27, "valor": 25681.8318},
    {"dia": 28, "valor": 1718.1221},
    {"dia": 29, "valor": 13220.495},
    {"dia": 30, "valor": 8414.61}
  ]
}
'''

dados = json.loads(faturamento_diario_json)
valores = [dia['valor'] for dia in dados['dias'] if dia['valor'] > 0]  

# Calcular menor, maior e média
menor_fat = min(valores)
maior_fat = max(valores)
media_mensal = sum(valores) / len(valores)

dias_acima_da_media = sum(1 for valor in valores if valor > media_mensal)

print(f"Menor faturamento: R${menor_fat:.2f}")
print(f"Maior faturamento: R${maior_fat:.2f}")
print(f"Dias com faturamento acima da média: {dias_acima_da_media}")

```
### **README para Exercício 4**

```
# Exercício 4: Percentual de Representação por Estado

<span style="color: pink;">Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:</span>
- <span style="color: pink;">SP – R$67.836,43</span>
- <span style="color: pink;">RJ – R$36.678,66</span>
- <span style="color: pink;">MG – R$29.229,88</span>
- <span style="color: pink;">ES – R$27.165,48</span>
- <span style="color: pink;">Outros – R$19.849,53</span>

<span style="color: pink;">Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.</span>

### **Resposta**

```python
# Dados de faturamento mensal por estado
faturamento_estado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

# Calcular o faturamento total
total_faturamento = sum(faturamento_estado.values())

# Calcular e imprimir o percentual de cada estado
percentuais = {estado: (valor / total_faturamento) * 100 for estado, valor in faturamento_estado.items()}

# Exibir resultados
print("Percentuais de representação por estado:")
for estado, percentual in percentuais.items():
    print(f"{estado}: {percentual:.2f}%")

```
### **README para Exercício 5**

```
# Exercício 5: Inverter String

<span style="color: pink;">Escreva um programa que inverta os caracteres de uma string.</span>

<span style="color: pink;">IMPORTANTE:</span>
- <span style="color: pink;">Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;</span>
- <span style="color: pink;">Evite usar funções prontas, como, por exemplo, reverse;</span>

### **Resposta**

```python
# Definindo a string ou solicitando a entrada do usuário
entrada = input("Informe uma string para inverter: ")

# Função para inverter a string sem usar funções prontas
def inverter_string(s):
    string_invertida = ""
    for char in s:
        string_invertida = char + string_invertida  # Adiciona o caractere no início
    return string_invertida

# Invertendo a string
resultado = inverter_string(entrada)

# Exibindo o resultado
print(f"String invertida: {resultado}")





# Exercício 3: Faturamento Diário

<span style="color: pink;">Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:</span>
- <span style="color: pink;">O menor valor de faturamento ocorrido em um dia do mês;</span>
- <span style="color: pink;">O maior valor de faturamento ocorrido em um dia do mês;</span>
- <span style="color: pink;">Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.</span>

<span style="color: pink;">IMPORTANTE:</span>
- <span style="color: pink;">Usar o json ou xml disponível como fonte dos dados do faturamento mensal;</span>
- <span style="color: pink;">Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;</span>

### **Resposta**

```python
import json

faturamento_diario_json = '''
{
  "dias": [
    {"dia": 1, "valor": 22174.1664},
    {"dia": 2, "valor": 24537.6698},
    {"dia": 3, "valor": 26139.6134},
    {"dia": 4, "valor": 0.0},
    {"dia": 5, "valor": 0.0},
    {"dia": 6, "valor": 26742.6612},
    {"dia": 7, "valor": 0.0},
    {"dia": 8, "valor": 42889.2258},
    {"dia": 9, "valor": 46251.174},
    {"dia": 10, "valor": 11191.4722},
    {"dia": 11, "valor": 0.0},
    {"dia": 12, "valor": 0.0},
    {"dia": 13, "valor": 3847.4823},
    {"dia": 14, "valor": 373.7838},
    {"dia": 15, "valor": 2659.7563},
    {"dia": 16, "valor": 48924.2448},
    {"dia": 17, "valor": 18419.2614},
    {"dia": 18, "valor": 0.0},
    {"dia": 19, "valor": 0.0},
    {"dia": 20, "valor": 35240.1826},
    {"dia": 21, "valor": 43829.1667},
    {"dia": 22, "valor": 18235.6852},
    {"dia": 23, "valor": 4355.0662},
    {"dia": 24, "valor": 13327.1025},
    {"dia": 25, "valor": 0.0},
    {"dia": 26, "valor": 0.0},
    {"dia": 27, "valor": 25681.8318},
    {"dia": 28, "valor": 1718.1221},
    {"dia": 29, "valor": 13220.495},
    {"dia": 30, "valor": 8414.61}
  ]
}
'''

dados = json.loads(faturamento_diario_json)
valores = [dia['valor'] for dia in dados['dias'] if dia['valor'] > 0]  

# Calcular menor, maior e média
menor_fat = min(valores)
maior_fat = max(valores)
media_mensal = sum(valores) / len(valores)

dias_acima_da_media = sum(1 for valor in valores if valor > media_mensal)

print(f"Menor faturamento: R${menor_fat:.2f}")
print(f"Maior faturamento: R${maior_fat:.2f}")
print(f"Dias com faturamento acima da média: {dias_acima_da_media}")


### **README para Exercício 4**

# Exercício 4: Percentual de Representação por Estado

<span style="color: pink;">Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:</span>
- <span style="color: pink;">SP – R$67.836,43</span>
- <span style="color: pink;">RJ – R$36.678,66</span>
- <span style="color: pink;">MG – R$29.229,88</span>
- <span style="color: pink;">ES – R$27.165,48</span>
- <span style="color: pink;">Outros – R$19.849,53</span>

<span style="color: pink;">Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.</span>

### **Resposta**

```python
# Dados de faturamento mensal por estado
faturamento_estado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

# Calcular o faturamento total
total_faturamento = sum(faturamento_estado.values())

# Calcular e imprimir o percentual de cada estado
percentuais = {estado: (valor / total_faturamento) * 100 for estado, valor in faturamento_estado.items()}

# Exibir resultados
print("Percentuais de representação por estado:")
for estado, percentual in percentuais.items():
    print(f"{estado}: {percentual:.2f}%")


### **README para Exercício 5**


# Exercício 5: Inverter String

<span style="color: pink;">Escreva um programa que inverta os caracteres de uma string.</span>

<span style="color: pink;">IMPORTANTE:</span>
- <span style="color: pink;">Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;</span>
- <span style="color: pink;">Evite usar funções prontas, como, por exemplo, reverse;</span>

### **Resposta**

```python
# Definindo a string ou solicitando a entrada do usuário
entrada = input("Informe uma string para inverter: ")

# Função para inverter a string sem usar funções prontas
def inverter_string(s):
    string_invertida = ""
    for char in s:
        string_invertida = char + string_invertida  # Adiciona o caractere no início
    return string_invertida

# Invertendo a string
resultado = inverter_string(entrada)

# Exibindo o resultado
print(f"String invertida: {resultado}")



