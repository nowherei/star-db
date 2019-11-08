РАБОТА С СЕРВЕРОМ

1. React ничего не знает от работе с сервером - это задача других биилиотек
2. Сетевой код следует изолировать от кода компонентов
3. Если необходимо, трансформируйте данные до того, как их получит компонент
4. Обрабатывайте состояния "загрузка" и "ошибка"
5. Разделеяте ответственность компонентов: логику и рендеринг

LIFECYCLE

MOUNTING
_____
constructor() => render() => componentDidMount()

UPDATES
_____
New Props
            => render() => componentDidUpdate(prevProps, prevState)
setState()

UNMOUNTING
______
componentWillUnmount()

ERROR
______
componentDidCatch()