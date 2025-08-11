# Gestión de Estado Global de Autenticación

Este proyecto utiliza **Zustand** para manejar el estado global de autenticación con **Supabase**. La configuración proporciona un estado centralizado y sincronizado automáticamente con los cambios de sesión.

## Arquitectura

### 1. Store de Zustand (`src/stores/auth-store.ts`)

- Maneja el estado global del usuario autenticado
- Incluye estados de loading e inicialización
- Proporciona acciones para actualizar el estado

### 2. Hook Principal (`src/hooks/useAuth.ts`)

- Sincroniza automáticamente el estado con Supabase
- Escucha cambios de autenticación en tiempo real
- Proporciona funciones para logout con manejo de errores
- Se inicializa automáticamente al cargar la aplicación

### 3. Hook Simple (`src/hooks/useUser.ts`)

- Acceso de solo lectura a la información del usuario
- Útil para componentes que solo necesitan mostrar datos del usuario

### 4. Provider (`src/components/providers/AuthProvider.tsx`)

- Inicializa el estado de autenticación en el layout principal
- Asegura que el estado esté disponible en toda la aplicación

## Uso

### Para mostrar información del usuario:

```tsx
import { useUser } from "@/hooks/useUser";

const UserProfile = () => {
  const { user, isLoading, isAuthenticated } = useUser();

  if (isLoading) return <div>Cargando...</div>;

  if (!isAuthenticated) return <div>No autenticado</div>;

  return (
    <div>
      <h1>Bienvenido, {user?.user_metadata?.full_name}</h1>
      <p>Email: {user?.email}</p>
    </div>
  );
};
```

### Para funcionalidades de autenticación completas:

```tsx
import { useAuth } from "@/hooks/useAuth";

const AuthButton = () => {
  const { user, isLoading, logout } = useAuth();

  const handleLogout = async () => {
    await logout(); // Maneja errores automáticamente
  };

  if (isLoading) return <div>Cargando...</div>;

  if (user) {
    return <button onClick={handleLogout}>Cerrar Sesión</button>;
  }

  return <a href="/login">Iniciar Sesión</a>;
};
```

### Acceso directo al store (avanzado):

```tsx
import { useAuthStore } from "@/stores/auth-store";

const AdvancedComponent = () => {
  const { user, setUser } = useAuthStore();

  // Usar solo si necesitas control directo del estado
  // Normalmente usa useAuth o useUser
};
```

## Estados Disponibles

- `user`: Usuario actual de Supabase (null si no está autenticado)
- `isLoading`: Verdadero durante operaciones de autenticación
- `isInitialized`: Verdadero cuando el estado inicial se ha cargado
- `isAuthenticated`: Verdadero si hay un usuario autenticado

## Funciones Disponibles

- `logout()`: Cierra sesión con manejo automático de errores y notificaciones
- `setUser()`: Actualiza el usuario (normalmente automático)
- `setLoading()`: Controla el estado de loading
- `setInitialized()`: Controla el estado de inicialización

## Sincronización Automática

El sistema escucha automáticamente los cambios de autenticación de Supabase:

- Login desde cualquier pestaña/dispositivo
- Logout desde cualquier pestaña/dispositivo
- Expiración de tokens
- Cambios en la sesión

## Migración de Componentes Existentes

### Antes:

```tsx
const [user, setUser] = useState(null);
const supabase = createClient();

useEffect(() => {
  const fetchUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
  };
  fetchUser();
}, []);
```

### Después:

```tsx
const { user, isLoading } = useUser();
```

## Configuración

El sistema se configura automáticamente en `src/app/[locale]/layout.tsx` con el `AuthProvider`. No requiere configuración adicional.

## Beneficios

1. **Estado Centralizado**: Un solo lugar para el estado de autenticación
2. **Sincronización Automática**: Los cambios se reflejan inmediatamente en toda la app
3. **Mejor Rendimiento**: Evita múltiples llamadas a `getUser()`
4. **Manejo de Errores**: Toast notifications automáticas para errores
5. **TypeScript**: Tipado completo para mejor experiencia de desarrollo
6. **Fácil Testing**: Estado predecible y aislado
