# Client-Side Layout

```sql
+---------------------------------------------------------+
| Top Bar: Search | Alerts | Profile                     |
+---------------------------------------------------------+
| Sidebar:        | Main Dashboard Area                  |
| Dashboard       |                                       |
| Patients        |   +-----------------------------+    |
| Appointments    |   |  Patient Summary Cards       |    |
| Medications     |   +-----------------------------+    |
| Reports         |   +-----------------------------+    |
| Settings        |   |  Vitals Monitoring Graph     |    |
+-----------------+   +-----------------------------+    |
                      +-----------------------------+    |
                      |  Real-Time Alerts           |    |
                      +-----------------------------+    |
                      +-----------------------------+    |
                      |  Upcoming Appointments      |    |
                      +-----------------------------+    |
```

# Set-Up
Install [Bun](https://bun.sh/docs/installation)

# Install Dependencies

```bash
bun install
```

# Localhost

```bash
bun run dev --port 8000
```

# Expose to Local Network

```bash
bun run dev --port 8000 --host
```
