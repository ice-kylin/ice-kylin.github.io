---
title: 'Haskell 快速入门笔记'
description: '基本上包含了 Haskell 的所有基础知识，适合快速入门（如果看不懂的话请配合格拉斯哥大学教学视频食用）'
date: '2023-07-20'
img: '/images/fp/haskell/haskell.jpg'
categories:
    - Study
tags:
    - Haskell
published: true
---

## 0. Hello World

根据 [`GHCup` 官方文档](https://www.haskell.org/ghcup/install/)，通过以下命令安装 `ghcup`：

::: code-group

```sh [类 UNIX]
curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh # 可能发生变动，请以官方文档为准
```

```[windows]
Set-ExecutionPolicy Bypass -Scope Process -Force;[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072;Invoke-Command -ScriptBlock ([ScriptBlock]::Create((Invoke-WebRequest https://www.haskell.org/ghcup/sh/bootstrap-haskell.ps1 -UseBasicParsing))) -ArgumentList $true
```

:::

按照提示完成安装，可以选择不安装 `haskell-stack`。

重新打开终端，测试一下命令：

```sh
ghc --version
cabal --version
ghci
```

Haskell 编写的经典 Hello World 程序：

```hs
main :: IO ()
main = putStrLn "Hello World!"
```

## 1. 第一步

```hs
x `f` y
```

-   以上形式是 `f x y` 的语法糖

### 实用的 GHCi 命令

-   `:load name`: 载入指定名称的脚本
-   `:reload`: 重新载入当前脚本
-   `:set editor name`: 设置编辑器为指定名称的编辑器
-   `:edit name`: 编辑指定名称的脚本
-   `:edit`: 编辑当前的脚本
-   `:type expr`: 显示表达式的类型
-   `:?`：显示所有可用命令
-   `:quit`：退出 GHCi

### 命名规范

-   函数和参数名称必须以小写字母开头
-   为了方便，习惯上列表参数的名称通常有一个 `s` 后缀

### 排版规则

-   在一连串的定义中，所有定义都必须在同一列上（拥有相同的缩进）

### 常用的有关列表的函数

1. `head`：选择列表的第一个元素
2. `tail`：删除列表的第一个元素
3. `!!`：选择列表的第 $n$ 个元素
4. `take`：选择列表的前 $n$ 个元素
5. `drop`：删除列表的前 $n$ 个元素
6. `length`：计算列表的长度
7. `sum`：计算数字列表的总和
8. `product`：计算数字列表的乘积
9. `++`：组合两个列表
10. `reverse`：反转列表

:::: details 参考答案

::: code-group

```hs [1]
n :: Int
n = a `div` length xs
  where
    a = 10
    xs = [1, 2, 3, 4, 5]
```

```hs [2]
{-# OPTIONS_GHC -Wno-unrecognised-pragmas #-}

{-# HLINT ignore "Use !!" #-}
{-# HLINT ignore "Use last" #-}
{-# HLINT ignore "Use init" #-}
last1 :: [a] -> a
last1 xs = head (drop (length xs - 1) xs)

last2 :: [a] -> a
last2 xs = xs !! (length xs - 1)

last3 :: [a] -> a
last3 xs = head (reverse xs)

init1 :: [a] -> [a]
init1 xs = take (length xs - 1) xs

init2 :: [a] -> [a]
init2 xs = reverse (drop 1 (reverse xs))

init3 :: [a] -> [a]
init3 xs = reverse (tail (reverse xs))
```

:::

::::

## 2. 类型和类

-   如果计算表达式 `e` 将产生类型 `t` 的值，则说明 `e` **具有类型** `t`
    -   写成 `e :: t`
-   格式良好的表达式有一个类型，可以在编译时使用称为**类型推断**的过程自动计算出来
-   Haskell 是强类型语言
-   在 GHCi 中，使用 `:type` 命令计算表达式的类型，而不需要评估它

### 基本类型

-   `Bool`
-   `Char`
-   `String`
-   `Int`
-   `Float`

### 列表类型

-   `[t]` 是具有 `t` 类型元素的列表
-   列表的类型没有说明它的长度
-   列表元素的类型没有限制

### 元组类型

-   `(t1, t2, ..., tn)` 的类型是 $n$ 元组，对于 `1...n` 中的任何第 $i$ 个元素具有 `ti` 类型
-   元组的类型说明它的大小
-   元组元素的类型类型限制

### 函数类型

-   `t1 -> t2` 是将 `t1` 类型的值映射到 `t2` 类型的值的函数类型

#### 柯里化函数

-   ```hs
    add' :: Int -> Int -> Int
    add' x y = x + y
    ```
    -   `add'` 接受一个整数 `x` 并返回一个函数 `add' x`
    -   反过来，这个函数接受一个整数 `y` 并返回结果 `x + y`
-   柯里化函数比应用元组实现多参数或返回值的函数更灵活，因为实用函数通常可以通过**部分应用**柯里化函数来实现

#### 多态函数

-   如果函数的类型包含一个或多个类型变量，则该函数称为**多态**
-   类型变量必须以小写字母开头，通常名称为 `a`、`b`、`c` 等

##### 常用类

-   `Num`
-   `Eq`
-   `Ord`

::::: details 参考答案

:::: code-group
::: code-group-item 1

```hs
f1 :: [Char]
f1 = ['a', 'b', 'c']

f2 :: (Char, Char, Char)
f2 = ('a', 'b', 'c')

f3 :: [(Bool, Char)]
f3 = [(False, '0'), (True, '1')]

f4 :: ([Bool], [Char])
f4 = ([False, True], ['0', '1'])

f5 :: [[a] -> [a]]
f5 = [tail, init, reverse]
```

:::
::: code-group-item 2

```hs
second :: [a] -> a
second xs = head (tail xs)

swap :: (b, a) -> (a, b)
swap (x, y) = (y, x)

pair :: a -> b -> (a, b)
pair x y = (x, y)

double :: Num a => a -> a
double x = x * 2

palindrome :: Eq a => [a] -> Bool
palindrome xs = reverse xs == xs

twice :: (t -> t) -> t -> t
twice f x = f (f x)
```

:::
::::

:::::

## 3. 函数定义

### 条件表达式

-   可以使用**条件表达式**定义函数
    -   条件表达式可以嵌套
    -   在 Haskell 中，条件表达式**必须总是有**一个 `else` 分支

### 守卫表达式

-   可以使用**守卫表达式**定义函数
    -   守卫表达式可以使涉及多个条件的条件定义更易于阅读
    -   捕获所有条件的 `otherwise` 在 `prelude` 中由 `otherwise = True` 定义

### 模式匹配

-   许多函数通过在它们的参数上使用**模式匹配**得到一个清晰简洁的定义，
    -   下划线符号 `_` 是一个匹配任何参数值的**通配符**
    -   模式匹配是**按顺序**进行匹配的
    -   模式不能出现**重复**的变量

#### 列表匹配

-   在底层，每个非空列表都是通过重复使用称为 **cons** 的运算符 `(:)` 构建的，该运算符将元素添加到列表的开头
    -   `[1, 2, 3, 4]` 表示 `1 : (2 : (3 : (4 : []))))`
    -   可以使用 **x:xs** 模式定义以列表为参数的函数
        -   `x:xs` 模式仅匹配**非空**列表
        -   `x:xs` 模式必须用**括起来**，因为函数的应用优先于 `(:)`

### Lambda 表达式

-   使用 **Lambda 表达式**可以在不命名函数的情况下构造函数
-   可以使用 Lambda 表达式来避免命名仅**引用一次**的函数

### Operator Sections

-   写在其两个参数**之间**的运算符可以通过使用括号转换为写在其两个参数**之前**的柯里化函数
    -   通常，如果 `x` 是运算符，则形式为 `(x)`、`(yx)`、`(xy)` 的函数称为 **sections**
    -   有时可以使用 sections 以简单的方式构建实用函数
        -   `(1+)`：successor function
        -   `(1/)`：reciprocation function
        -   `(*2)`：加倍函数
        -   `(/2)`：减半函数

::::: details 参考答案

:::: code-group
::: code-group-item 1

```hs
safetail1 :: [a] -> [a]
safetail1 xs = if null xs then [] else tail xs

safetail2 :: [a] -> [a]
safetail2 xs
  | null xs = []
  | otherwise = tail xs

safetail3 :: [a] -> [a]
safetail3 [] = []
safetail3 xs = tail xs

safetail4 :: [a] -> [a]
safetail4 [] = []
safetail4 (_ : xs) = xs
```

:::
::: code-group-item 2

```hs
or1 :: Bool -> Bool -> Bool
or1 x y =
  if x
    then True
    else
      if y
        then True
        else False

or2 :: Bool -> Bool -> Bool
or2 x y
  | x = True
  | y = True
  | otherwise = False

or3 :: Bool -> Bool -> Bool
or3 True _ = True
or3 _ True = True
or3 _ _ = False

or4 :: Bool -> Bool -> Bool
or4 False False = False
or4 _ _ = True

-- actually defined in standard lib
or5 :: Bool -> Bool -> Bool
or5 False a = a
or5 True _ = True
```

:::
::: code-group-item 3

```hs
and1 :: Bool -> Bool -> Bool
and1 x y =
  if x
    then
      if y
        then True
        else False
    else False
```

:::
::: code-group-item 4

```hs
and2 :: Bool -> Bool -> Bool
and2 x y =
  if x
    then y
    else
      if not x
        then False
        else False
```

:::
::::

:::::

## 4. 列表生成式

-   在 Haskell 中，类似的数学中的集合建构式符号可用于从旧列表构造新的 **列表**
    -   `[x^2 | x <- [1 .. 5]]`
        -   表达式`x <- [1 .. 5]`被称为**生成器**
        -   列表生成式可以有**多个**生成器，用逗号分隔
        -   改变生成器的**顺序**会改变最终列表中元素的顺序
        -   多个生成器类似**嵌套循环**，后面的生成器作为更深的嵌套循环，其变量的值更频繁地更改
    -   依赖生成器：后面的生成器可以**依赖**由前面的生成器引入的变量
    -   守卫：列表生成式可以使用守卫来过滤前面的生成器生成的值

::::: details 参考答案

:::: code-group
::: code-group-item 1

```hs
pyths :: (Num c, Ord c, Enum c) => c -> [(c, c, c)]
pyths x = [(a, b, c) | a <- [1 .. x], b <- [1 .. x], c <- [1 .. x], a + b > c, a ^ 2 + b ^ 2 == c ^ 2]
```

:::
::: code-group-item 2

```hs
perfects :: Integral a => a -> [a]
perfects x = [a | a <- [1 .. x], sum ((\x -> [a | a <- [1 .. x - 1], x `mod` a == 0]) a) == a]
```

:::
::: code-group-item 3

```hs
scalarProduct :: Num a => [a] -> [a] -> a
scalarProduct xs ys = sum [uncurry (*) xy | xy <- zip xs ys]
```

:::
::::

:::::

## 5. 递归函数

-   在 Haskell 中，函数也可以使用自身定义
    -   此类函数称为**递归**
-   某些函数，例如阶乘，使用其它函数定义起来更**简单**
-   许多函数可以**自然地**根据自身定义
-   使用递归定义的函数的属性可以使用简单但强大的数学技术 —— **归纳**来证明
-   具有多个参数的函数也可以使用递归定义
-   递归可用于在**列表**上定义函数

:::: code-group
::: code-group-item drop'

```hs
drop' :: Int -> [a] -> [a]
drop' _ [] = []
drop' 0 xs = xs
drop' n (_ : xs) = drop' (n - 1) xs
```

:::
::: code-group-item init'

```hs
init' :: [a] -> [a]
init' [] = error "empty list"
init' [_] = []
init' (x : xs) = x : init' xs
```

:::
::::

### 如何递归地思考

1. **命名**函数
2. **写下**它的类型
3. **枚举**情况
4. **定义简单的**情况
5. **列出**“成分”
6. 定义其它情况
7. 思考结果是否正确

## 6. 高阶函数

-   如果函数将函数作为参数或返回函数作为结果，则该函数被称为**高阶函数**
-   **常见的编程成语**可以编码为编程语言本身的函数
-   **领域特定语言**可以定义为高阶函数的集合
-   **高阶函数的代数性质**可用于对程序进行推理

### Foldr 函数

-   可以使用以下简单的递归形式定义和列表相关的许多函数
    -   ```
          f [] = v
          f (x : xs) = x ⊕ f xs
        ```
    -   ```haskell
          sum [] = 0
          sum (x : xs) = x + sum xs
        ```
-   高阶库函数 `foldr`（右折叠）封装了这种简单的递归模式，其使用一个函数 `f` 和值 `v` 作为参数
    -   ```haskell
          foldr :: (a -> b -> b) -> b -> [a] -> b
          foldr _ v [] = v
          foldr f v (x : xs) = f x (foldr f v xs)
        ```
    -   ```
            product [1, 2, 3]
          = foldr (*) 1 [1, 2, 3]
          = foldr (*) 1 (1 : (2 : (3 : [])))
          = 1 * (2 * (3 * 1))
          = 6
        ```
-   和列表相关的一些递归函数，例如 `sum`，使用 `foldr` 定义起来更简单
-   使用 `foldr` 定义的函数的属性可以使用 `foldr` 的代数属性来证明，例如 **fusion** 和 **banana split**
    规则
-   如果使用 `foldr` 代替显式递归，高级程序**优化**会更简单

### 其它库函数

-   库函数 `(.)` 将两个函数的**组合**作为单个函数返回
-   库函数 `all` 判断列表的每个元素是否满足给定的条件
-   库函数 `any` 判断列表的至少一个元素是否满足的条件
-   库函数 `takeWhile` 从列表中选择元素，直到给定的条件不满足
-   库函数 `dropWhile` 删除元素，直到给定的条件不满足并返回剩下的元素

::::: details 参考答案

:::: code-group
::: code-group-item 1

```hs
c :: (a -> b) -> (a -> Bool) -> [a] -> [b]
c m f xs = map m (filter f xs)
```

:::
::: code-group-item 2

```hs
-- map
map1 :: (a -> b) -> [a] -> [b]
map1 _ [] = []
map1 f (x : xs) = f x : map1 f xs

map2 :: (a -> b) -> [a] -> [b]
map2 f = foldr (\x xs -> f x : xs) []

-- filter
filter1 :: (a -> Bool) -> [a] -> [a]
filter1 _ [] = []
filter1 p (x : xs)
  | p x = x : filter1 p xs
  | otherwise = filter1 p xs

filter2 :: (a -> Bool) -> [a] -> [a]
filter2 p = foldr (\x xs -> if p x then x : xs else xs) []
```

:::
::::

:::::

## 7. 声明类型和类

### 类型声明

-   在 Haskell 中，现有类型的新名称可以使用**类型声明**来定义
-   像函数定义一样，类型声明也可以有**参数**
-   类型声明可以嵌套
-   但是，类型声明不能是递归的

### 数据声明

-   可以通过使用**数据声明**指定其值来定义全新的类型
    -   `date Bool = False | True`
        -   `False` 和 `True` 这两个值被称为 Bool 类型的**构造器**
        -   类型和构造器名称必须始终以大写字母开头
        -   数据声明类似于上下文无关文法
            -   前者指定一种类型的值，后者指定一种语言的句子
-   数据声明中的构造器也可以有参数
-   数据声明本身也可以有参数
-   在 Haskell 中，可以根据自身声明新类型
    -   也就是说，类型可以是**递归**

::::: details 参考答案

:::: code-group
::: code-group-item 1

```hs
mult' :: (Eq t, Num t, Num p) => p -> t -> p
mult' _ 0 = 0
mult' x y = x + mult' (x - 1) y

data Nat
  = Zero
  | Succ Nat
  deriving (Show)

add :: Nat -> Nat -> Nat
add x Zero = x
add x (Succ y) = Succ (add x y)

mult :: Nat -> Nat -> Nat
mult Zero _ = Zero
mult _ Zero = Zero
mult (Succ n) m = add m (mult n m)
```

:::
::: code-group-item 2

```hs
data Expr
  = Val Int
  | Add Expr Expr
  | Mul Expr Expr
  deriving (Show)

folde :: (Int -> t) -> (t -> t -> t) -> (t -> t -> t) -> Expr -> t
folde f _ _ (Val n) = f n
folde f g h (Add x y) = folde f g h x `g` folde f g h y
folde f g h (Mul x y) = folde f g h x `h` folde f g h y

eval :: Expr -> Int
eval = folde id (+) (*)
```

:::
::: code-group-item 3

```hs
data Tree a
  = Leaf a
  | Node (Tree a) (Tree a)
  deriving (Show)
```

:::
::::

:::::

## 8. 交互式编程

-   批处理程序：在开始时获取所有输入并在结束时给出所有输出
-   交互式程序：在运行时从键盘读取并写入屏幕
-   Haskell 程序是纯数学函数，**没有副作用**
-   但是从键盘读取和写入屏幕是副作用（交互式程序有副作用）
-   解决方案
    -   可以用 Haskell 编写交互式程序，通过使用类型来区分纯表达式和可能涉及副作用的动作
    -   评估一个动作会执行它的副作用，最终结果值被丢弃

### 基本动作

-   标准库提供了许多动作，包括以下 3 个原语
    -   `getChar`：从键盘读取一个字符，将其回显到屏幕并返回该字符作为其结果值
    -   `putChar c`：将字符 `c` 写入屏幕并且不返回结果值
    -   `return v`：简单地返回值`v`而不执行任何交互

### 系列动作

-   可以使用关键字 `do` 将一系列动作组合为单个复合动作
-   `getLine`：从键盘读取字符串
-   `putStr`：将字符串写入屏幕
-   `putStrLn`：写入一个字符串并移动光标到新行

```hs
-- 提示输入字符串并显示其长度的操作
strLen :: IO ()
strLen = do
  putStrLn "Enter a string:"
  xs <- getLine
  putStr "The length of the string is "
  putStr (show (length xs))
  putStrLn "."
```

### Hangman

```hs
import System.IO (hSetEcho, stdin)

-- 采用自上而下的方法在 Haskell 中实现 Hangman 游戏
hangman :: IO ()
hangman = do
  putStrLn "Hangman"
  putStrLn "----- >8 -----"
  putStrLn "Think of a word:"
  xs <- sGetLine
  putStrLn "Try to guess it:"
  play xs [] 8
  putStrLn "----- >8 -----"
  putStrLn "Thanks for playing, good bye!"

sGetLine :: IO String
sGetLine = do
  x <- sGetChar
  if x == '\n'
    then do
      putChar '\n'
      return []
    else do
      putChar '*'
      xs <- sGetLine
      return (x : xs)

sGetChar :: IO Char
sGetChar = do
  hSetEcho stdin False
  x <- getChar
  hSetEcho stdin True
  return x

play :: String -> [Char] -> Integer -> IO ()
play xs _ 0 = do
  putStrLn "You lose! The answer is:"
  putStrLn xs
play xs ys n = do
  y <- getChar
  putChar '\n'
  let zs = y : ys
  if y `elem` xs
    then do
      rs <- match xs zs
      if fullMatch rs
        then do
          putStrLn "You get it! The answer is:"
          putStrLn xs
        else do
          putStrLn "Correct! The current word is:"
          putStrLn rs
          play xs zs n
    else do
      if n == 1
        then do play xs ys (n - 1)
        else do
          rs <- match xs ys
          putStr "Wrong! You have "
          putStr (show (n - 1))
          putStrLn " chances left. The current word is:"
          putStrLn rs
          play xs ys (n - 1)

match :: (Monad m, Foldable t) => [Char] -> t Char -> m [Char]
match [] ys = do return []
match (x : xs) ys =
  if x `elem` ys
    then do
      rs <- match xs ys
      return (x : rs)
    else do
      rs <- match xs ys
      return ('_' : rs)

fullMatch :: [Char] -> Bool
fullMatch = notElem '_'
```

::: details 参考答案

```hs
import System.IO ()

-- 棋盘由五排星星组成
-- 两名玩家轮流从单行末尾移除一颗或多颗星星
-- 获胜者是从板上移除最后一颗或多颗星星的玩家
nim :: IO ()
nim = do
  putStrLn "nim"
  play [5, 4, 3, 2, 1] 1
  showDiv
  putStrLn "Thanks for playing, bye!"

play :: [Int] -> Int -> IO ()
play xs p = do
  showDiv
  showBoard xs
  showDiv
  putStr "player "
  putStr (show p)
  putStrLn ", select the line num of the line to remove:"
  n <- getInt
  putStr "player "
  putStr (show p)
  putStrLn ", select the num of stars to remove:"
  x <- getInt
  let ys = getNewBoard xs n x
  if null ys
    then showWinner p
    else
      play
        ys
        ( if p == 1
            then 2
            else 1
        )

showBoard :: [Int] -> IO ()
showBoard [] = do return ()
showBoard (x : xs) = do
  showRow x
  putChar '\n'
  showBoard xs

showDiv :: IO ()
showDiv = do putStrLn "----- >8 -----"

showRow :: Int -> IO ()
showRow 0 = do
  return ()
showRow x = do
  putStr "* "
  showRow (x - 1)

showWinner :: Int -> IO ()
showWinner x =
  do
    putStr "player "
    putStr (show x)
    putStrLn " win!"

getInt :: IO Int
getInt = do parseInt <$> getLine

parseInt :: [Char] -> Int
parseInt [] = 0
parseInt ('1' : xs) = (10 ^ length xs) + parseInt xs
parseInt ('2' : xs) = 2 * (10 ^ length xs) + parseInt xs
parseInt ('3' : xs) = 3 * (10 ^ length xs) + parseInt xs
parseInt ('4' : xs) = 4 * (10 ^ length xs) + parseInt xs
parseInt ('5' : xs) = 5 * (10 ^ length xs) + parseInt xs
parseInt ('6' : xs) = 6 * (10 ^ length xs) + parseInt xs
parseInt ('7' : xs) = 7 * (10 ^ length xs) + parseInt xs
parseInt ('8' : xs) = 8 * (10 ^ length xs) + parseInt xs
parseInt ('9' : xs) = 9 * (10 ^ length xs) + parseInt xs
parseInt ('0' : xs) = 0 + parseInt xs
parseInt _ = error "Invalid number"

getNewBoard :: [Int] -> Int -> Int -> [Int]
getNewBoard xs n x =
  if y /= 0
    then take (n - 1) xs ++ [y] ++ drop n xs
    else take (n - 1) xs ++ drop n xs
  where
    y = xs !! (n - 1) - x
```

:::

## 9. 惰性求值

-   Haskell 中的表达式使用一种称为惰性求值的简单技术进行求值
    -   避免做**不必要的**求值
    -   尽可能确保**终止**
    -   支持使用**无限**列表进行编程
    -   允许程序更加**模块化**
-   任何求值结果**相同**的表达式的方式都会给出**相同**的结果，只要它终止

### 求值策略

-   有两种主要策略来决定接下来要考虑哪个可约表达式（**redex**）
    -   选择一个 **最里层** 的 redex，即不包含另一个 redex
    -   选择一个 **最外层** 的 redex，即不包含在另一个 redex 中
-   当最内层求值**未能终止时**，最外层求值可能会给出结果
-   如果**任何**评估序列终止，那么最外层也终止，结果相同
-   最外层的策略是**低效的**，因为在应用平方时参数 `1 + 2` 是重复的，因此会被计算两次
    -   由于这种重复，最外层的评估可能比最内层需要**更多**步骤
    -   这个问题可以通过使用**指针**来指示共享参数很容易地避免

### 惰性求值

-   惰性求值 = 最外层求值 + 参数共享
-   惰性求值尽可能确保**终止**，但**从不会**需要比最内层求值更多的步骤，并且有时反而更少

### 无限列表

-   通常，**惰性**求值表达式仅根据使用它们的上下文的**要求**进行求值

### 模块化编程

-   惰性求值允许我们通过将控制与数据分离来使程序更加**模块化**
-   在不使用惰性求值的情况下，控制和数据部分需要**耦合**在一起

#### 生成素数

```hs
primes :: [Integer]
primes = sieve [2 ..]

sieve :: Integral a => [a] -> [a]
sieve [] = []
sieve (p : xs) =
  p :
  sieve
    [ x | x <- xs, x `mod` p /= 0
    ]

-- 孪生素数
twins :: [(Integer, Integer)]
twins = filter twin (zip primes (tail primes))

twin :: (Eq a, Num a) => (a, a) -> Bool
twin (x, y) = y == x + 2
```

-   生成无限的素数序列
    1.  写下无限序列 `2, 3, 4, ...`
    2.  将第一个数 $p$ 标记为素数
    3.  从序列中删除所有 $p$ 的倍数
    4.  重复第二步
