     )
        cprint(f">>> Успешно | {address} | {amount_to_withdrawal}", "green")
    except Exception as error:
        cprint(f">>> Неудачно | {address} | ошибка : {error}", "red")
